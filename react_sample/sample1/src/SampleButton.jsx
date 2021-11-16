import React from "react";
const styles = {
 btn: {
   color: "red"
 }
}
export default function(){
 return (
   <button style={styles.btn} onClick={()=> alert("hello")}>
     Clicke Me!
   </button>
 );
}