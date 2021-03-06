import React, { useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import {
  Card,
  CardBody,
  Button
} from 'reactstrap';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

if (!firebase.apps.length) {
firebase.initializeApp({
    apiKey: "AIzaSyC3MdpnrSmvQLnfKjfbgfUOIcwSEj2HJHM",
    authDomain: "op360-b8d73.firebaseapp.com",
    databaseURL: "https://op360-b8d73.firebaseio.com",
    projectId: "op360-b8d73",
    storageBucket: "op360-b8d73.appspot.com",
    messagingSenderId: "972147332257",
    appId: "1:972147332257:web:9fea471dcef2e0545b8ce0",
    measurementId: "G-S45L8QD45B"
})
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function ChatApp() {

  const [user] = useAuthState(auth);

  return (
    <Card>
      <CardBody>
      <div className="App">
          <header>
            <h1>OP360 Chats</h1>
          <SignOut />
        </header>
        <section>
          {user ? <ChatRoom /> : <SignIn />}
        </section>
      </div>
      </CardBody>  
    </Card>
  );
} 

function SignIn() {
  const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      hd: "officepartners360.com",
    });
  auth.signInWithPopup(provider);
  }

  return (
    <>
      <Button className="sign-in" color="primary" size="lg" onClick={signInWithGoogle}>Sign in with Google</Button>
      <p className="ctext1">Use your company email!</p>
      <p className="ctext">Do not violate the community guidelines!</p>
    </>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');
  const sendMessage = async (e) => {
  e.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName
    })
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
  <>
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <span ref={dummy}></span>
    </main>
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
      <button type="submit" disabled={!formValue}>🕊️</button>
    </form>
  </>
  )
}

function ChatMessage(props) {
const { text, uid, photoURL, displayName } = props.message;
const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

return (
<>
  <div className={`message ${messageClass}`}>
    <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
    <h6 className="p1">{displayName}</h6><p>{text}</p>
  </div>
</>
)
}

export default ChatApp;
