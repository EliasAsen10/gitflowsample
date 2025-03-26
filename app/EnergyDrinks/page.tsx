"use client";

import React, { useEffect, useState } from "react";

type Drink = {
    id: number;
    name: string;
    price: string;
    image: string;
};

const EnergyDrinkApp = () => {
    const [drinks, setDrinks] = useState<Drink[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const simulatedData: Drink[] = [
            {
                id: 1,
                name: "Monster Energy",
                price: "2.99",
                image: "/images/monster.png",
            },
            {
                id: 2,
                name: "Red Bull",
                price: "2.49",
                image: "/images/redbull.jpg",
            },
            {
                id: 3,
                name: "Rockstar",
                price: "2.79",
                image: "/images/rockstar.jpg",
            },
            {
                id: 4,
                name: "Effect",
                price: "1.99",
                image: "/images/effect.jpg",
            },
            {
                id: 5,
                name: "Relentless",
                price: "2.39",
                image: "/images/relentless.jpg",
            },
        ];

        setTimeout(() => {
            setDrinks(simulatedData);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div style={{ padding: "1rem", backgroundColor: "#d1f7c4", minHeight: "100vh" }}>
            <h1 style={{ color: "white" }}>Energy Drinks</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    {drinks.map((drink) => (
                        <div
                            key={drink.id}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                padding: "1rem",
                                width: "200px",
                                background: "orange",
                            }}
                        >
                            <strong>{drink.name}</strong> – €{drink.price}
                            <br />
                            <img
                                src={drink.image}
                                alt={drink.name}
                                style={{
                                    width: "100%",
                                    height: "150px",
                                    objectFit: "cover",
                                    marginTop: "0.5rem",
                                }}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EnergyDrinkApp;