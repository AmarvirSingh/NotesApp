import React from "react";
import styles from "../Styles/SingleNote.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SingleNote({ title, body, time }) {
  return (
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-center">{title}</h5>
          <p class="card-text">{body}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p class="text-muted ">Created:{time}</p>
            <button class="btn btn-primary" onClick="markAsDone()">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
<div className={styles.container}>
  <h5 className={styles.title}>Title</h5>
  <p className={styles.description}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
    expedita laudantium. Reiciendis unde atque facilis totam aliquam in
    praesentium, nisi vero ipsam cumque impedit quasi corrupti cum at
    commodi magni?
  </p>
  <small className={styles.date}> dated : 25 may 2013 </small>
  <button className={styles.btn}> done</button>
</div>*/
