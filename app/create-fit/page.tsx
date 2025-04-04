"use client"

import React, { useState } from 'react';
import "./styles.css";
import { Button } from "@/components/ui/button"

function Page() {
  const [gender, setGender] = useState('Male');
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    //Building query
    const top = (document.getElementById("top") as HTMLInputElement).value;
    const bottom = (document.getElementById("bottom") as HTMLInputElement).value;
    const outerwear = (document.getElementById("outerwear") as HTMLInputElement).value;
    if (!top || !bottom || !outerwear) return;

    setQuery(`${top}, ${bottom}, ${outerwear}, ${gender}`);
    setLoading(true);
    setError(null);
    console.log(loading);
    console.log(error);

    try {
        const response = await fetch(`/api/pinterest?query=${encodeURIComponent(query)}`);
        const data = await response.json();
        if (response.ok) {
            setImages(data.images);
            console.log(images);
        } else {
            setError(data.error || 'Failed to fetch images');
        }
    } catch (err) {
        setError('An error occurred ' + err);
    }

    setLoading(false);
  };

  return (
    <div className='main-create-fit'>
      <div className='flexbox'>
        <div className='sec1'>
          <div>
            <div>
              <h1>Top Clothing Item</h1>
              <h3>Ex: White T-Shirt, Blue Polo, etc.</h3>
              <input id="top"/>
            </div>
            <div>
              <h1>Bottom Clothing Item</h1>
              <h3>Ex: White Chino, Sky Blue Jeans, Grey Tracks, etc.</h3>
              <input id="bottom"/>
            </div>
            <div>
              <h1>Outerwear/Layering</h1>
              <h3>Ex: Bomber Jacket, Leather Jacket, Cardigan, etc.</h3>
              <input id="outerwear"/>
            </div>
            <div>
              <h1>Gender</h1>
              <h3>Select your gender</h3>
              <div>
                <button onClick={() => {setGender("Male")}} style={{ background: gender === "Male" ? " rgb(39, 39, 39)" : "", cursor: "pointer", color: "white", border: gender=="Male" ? "" : "1px solid rgb(69, 69, 69)" }} className="button-gender">
                  Male
                </button>
                <button onClick={() => {setGender("Female")}} style={{ background: gender === "Female" ? " rgb(39, 39, 39)" : "", cursor: "pointer", color: "white", border: gender=="Female" ? "" : "1px solid rgb(69, 69, 69)" }} className="button-gender">
                  Female
                </button>
              </div>
            </div><br/>
            <Button onClick={fetchImages} style={{background: "white", color: "black", cursor: "pointer"}}>Generate</Button>
          </div>
        </div>
        <div className='sec2'></div>
      </div>
    </div>
  )
}

export default Page