import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useRef , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import db, { auth } from "../../Firebase/firebase";
import { addUser } from "../../Store/ReduxSlice/userSlice";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();


  useEffect(()=>{
    const authCheck = ()=>{
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              console.log(uid);
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    }
    authCheck();

    return () => {
        authCheck()
    }
      
  },[])
  useEffect(()=>{
    const fun = ()=>{
        const user = auth.currentUser;
        if(user){
            console.log(user);
        }else{
            console.log('no user');
        }
    }
    fun()
    setTimeout(()=>{
        console.log('time out');
        fun()
    },1000);
  },[])



  const loginSubmit = () => {
    const email = usernameRef.current.value;
    const password = passwordRef.current.value;


    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    // const q = query(collection(db, "users"), where("username", "==", "admin"));

    // getDocs(q)
    //   .then((querySnapshot) => {

    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       console.log(doc.id, " => ", doc.data());
    //       dispatch(addUser(doc.data()));
    //     });
    //     navigate('/admin');

    //   })
    //   .catch((error) => {
    //     console.log("Error getting documents: ", error);
    //   });
  };
  return (
    <div>
      <input ref={usernameRef} type="email" placeholder="email" />
      <input ref={passwordRef} type="password" placeholder="password" />
      <button onClick={loginSubmit}>Click Me</button>
      <button onClick={()=>{
        signOut(auth).then(()=>{
            alert('user sign out')
        }).catch((error)=>{
            alert(error.message)
        })

      }} >LogOut</button>
    </div>
  );
};

export default Login;
