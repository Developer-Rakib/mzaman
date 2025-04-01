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
            <h1 className="text-xl font-bold mb-4">Fish Inventory</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fishStock.map((fish) => (
                    <div key={fish._id} className="p-4">
                        <div>
                            <h2 className="text-lg font-semibold">{fish.name}</h2>
                            <p>Quantity: {fish.quantity} kg</p>
                            <p>Buy Price: ${fish.buyPrice}</p>
                            <p>Sell Price: ${fish.sellPrice}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <h2 className="text-lg font-bold">Add New Fish</h2>
                <div className="flex gap-2">
                    <input placeholder="Name" value={newFish.name} onChange={(e) => setNewFish({ ...newFish, name: e.target.value })} />
                    <input placeholder="Quantity" type="number" value={newFish.quantity} onChange={(e) => setNewFish({ ...newFish, quantity: e.target.value })} />
                    <input placeholder="Buy Price" type="number" value={newFish.buyPrice} onChange={(e) => setNewFish({ ...newFish, buyPrice: e.target.value })} />
                    <input placeholder="Sell Price" type="number" value={newFish.sellPrice} onChange={(e) => setNewFish({ ...newFish, sellPrice: e.target.value })} />
                    <button onClick={addFish}>Add</button>
                </div>
            </div>
        </div>
    );
}