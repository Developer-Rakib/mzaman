"use client";
import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";


export default function Inventory() {
    const [fishStock, setFishStock] = useState([]);
    const [newFish, setNewFish] = useState({ name: "", quantity: "", buyPrice: "", sellPrice: "" });

    useEffect(() => {
        fetchFishStock();
    }, []);

    const fetchFishStock = async () => {
        const response = await axios.get("/api/fish");
        setFishStock(response.data);
    };

    const addFish = async () => {
        // await axios.post("/api/fish", newFish);
        // fetchFishStock();
        // setNewFish({ name: "", quantity: "", buyPrice: "", sellPrice: "" });
    };

    return (
        <div className="p-6 mt-32">
            this is sales

        </div>
    );
}