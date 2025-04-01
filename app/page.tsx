"use client"

// import Image from "next/image";
import { useRouter } from "next/navigation";
import "./styles.css"

export default function Home() {
  const router = useRouter();
  return (
    <div className="main">
      <div className="nav">
        <div>
          <h3>Outfit Creator</h3>
          <h1>Bring your fit to life now</h1>
        </div>
        <a style={{cursor: "pointer"}} onClick={() => {window.open("https://www.linkedin.com/in/shashwat-mahalanobis-1aa359163/")}}>Shashwat Mahalanobis</a>
      </div>
      <div className="button-body">
        <button className="btn" id="btn" onClick={() => {router.push("/create-fit")}}>Create Fit</button>
      </div>
      <center>
        <button>Explore Popular Fits</button>
      </center>
    </div>
  );
}
