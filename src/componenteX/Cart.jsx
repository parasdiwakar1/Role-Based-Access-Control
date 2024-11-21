import React, { useState } from 'react';
import './Cart.css';

function Cart({ backlog, setBacklog, ready, setReady, progress, setProgress, done, setDone }) {
    const [newCard, setNewCard] = useState({ title: '', roll: '', img: '', msg: '' });
    const [filter, setFilter] = useState('');

    const handleAddCard = (category, setCategory) => {
        if (!newCard.title || !newCard.roll || !newCard.img || !newCard.msg) {
            alert('Please fill in all fields');
            return;
        }
        setCategory([...category, newCard]);
        setNewCard({ title: '', roll: '', img: '', msg: '' });
    };

    const handleDeleteCard = (category, setCategory, index) => {
        const updatedCards = category.filter((_, i) => i !== index);
        setCategory(updatedCards);
    };

    const handleUpdateCard = (category, setCategory, index, updatedCard) => {
        const updatedCards = category.map((card, i) => (i === index ? updatedCard : card));
        setCategory(updatedCards);
    };

    const filteredCards = (category) => {
        return category.filter(card => card.title.includes(filter) || card.roll.includes(filter));
    };

    return (
        <div className="container">
            <input 
                type="text" 
                className="filter-input"
                placeholder="Filter cards..." 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)} 
            />
            
            <div className="category">
                <h3>Backlog</h3>
                {filteredCards(backlog).map((card, index) => (
                    <Card key={index} card={card} onUpdate={(updatedCard) => handleUpdateCard(backlog, setBacklog, index, updatedCard)} onDelete={() => handleDeleteCard(backlog, setBacklog, index)} />
                ))}
                <button className="add-button" onClick={() => handleAddCard(backlog, setBacklog)}>Add Card to Backlog</button>
            </div>
            
            <div className="category">
                <h3>Ready</h3>
                {filteredCards(ready).map((card, index) => (
                    <Card key={index} card={card} onUpdate={(updatedCard) => handleUpdateCard(ready, setReady, index, updatedCard)} onDelete={() => handleDeleteCard(ready, setReady, index)} />
                ))}
                <button className="add-button" onClick={() => handleAddCard(ready, setReady)}>Add Card to Ready</button>
            </div>
            
            <div className="category">
                <h3>In Progress</h3>
                {filteredCards(progress).map((card, index) => (
                    <Card key={index} card={card} onUpdate={(updatedCard) => handleUpdateCard(progress, setProgress, index, updatedCard)} onDelete={() => handleDeleteCard(progress, setProgress, index)} />
                ))}
                <button className="add-button" onClick={() => handleAddCard(progress, setProgress)}>Add Card to Progress</button>
            </div>
            
            <div className="category">
                <h3>Done</h3>
                {filteredCards(done).map((card, index) => (
                    <Card key={index} card={card} onUpdate={(updatedCard) => handleUpdateCard(done, setDone, index, updatedCard)} onDelete={() => handleDeleteCard(done, setDone, index)} />
                ))}
                <button className="add-button" onClick={() => handleAddCard(done, setDone)}>Add Card to Done</button>
            </div>
            
            <div className="category">
                <h3>Add New Card</h3>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Title" 
                        value={newCard.title} 
                        onChange={(e) => setNewCard({ ...newCard, title: e.target.value })} 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Roll" 
                        value={newCard.roll} 
                        onChange={(e) => setNewCard({ ...newCard, roll: e.target.value })} 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Image URL" 
                        value={newCard.img} 
                        onChange={(e) => setNewCard({ ...newCard, img: e.target.value })} 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Message" 
                        value={newCard.msg} 
                        onChange={(e) => setNewCard({ ...newCard, msg: e.target.value })} 
                    />
                </div>
            </div>
        </div>
    );
}

function Card({ card, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedCard, setUpdatedCard] = useState(card);

    const handleSave = () => {
        onUpdate(updatedCard);
        setIsEditing(false);
    };

    return (
        <div className="card">
            {isEditing ? (
                <div className="card-edit">
                    <input 
                        type="text" 
                        value={updatedCard.title} 
                        onChange={(e) => setUpdatedCard({ ...updatedCard, title: e.target.value })} 
                    />
                    <input 
                        type="text" 
                        value={updatedCard.roll} 
                        onChange={(e) => setUpdatedCard({ ...updatedCard, roll: e.target.value })} 
                    />
                    <input 
                        type="text" 
                        value={updatedCard.img} 
                        onChange={(e) => setUpdatedCard({ ...updatedCard, img: e.target.value })} 
                    />
                    <input 
                        type="text" 
                        value={updatedCard.msg} 
                        onChange={(e) => setUpdatedCard({ ...updatedCard, msg: e.target.value })} 
                    />
                    <button className="save-button" onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div className="card-content">
                    <h4>{card.title}</h4>
                    <p className='cart-p'>{card.roll}</p>
                    <img src={card.img} alt={card.title} />
                    <p>{card.msg}</p>
                    <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
                    <button className="delete-button" onClick={onDelete}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default Cart;
