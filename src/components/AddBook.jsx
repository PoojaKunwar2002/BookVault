import React,{useState} from 'react';
import './AddBook.css'

function AddBook(props){

    let[enteredId, setEnteredId] = useState("");
    let[enteredTitle, setEnteredTitle] = useState("");
    let[enteredAuthor, setEnteredAuthor] = useState("");
    let[enteredPrice, setEnteredPrice] = useState("");
    
    function handleChangeId(event){
        setEnteredId(event.target.value);
    }
    function handleChangeTitle(event){
        setEnteredTitle(event.target.value);
    }
    function handleChangeAuthor(event){
        setEnteredAuthor(event.target.value);
    }
    function handleChangePrice(event){
        setEnteredPrice(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let book = {
            id: enteredId,
            title: enteredTitle,
            author: enteredAuthor,
            price: enteredPrice
        }

        props.handleSubmit(book);

        setEnteredId("");
        setEnteredTitle("");
        setEnteredAuthor("");
        setEnteredPrice("");
    }
   

    return(
        <div className='form-container'>

            <form className='form-div' onSubmit={handleSubmit}>

                <span id="label-id" className='input-lables'>id:</span><input type='text' id='id' onChange={handleChangeId} value={enteredId}></input>
                <span id="label-title" className='input-lables'>title:</span><input type='text' id='title' onChange={handleChangeTitle} value={enteredTitle}></input>
                <span id="label-author" className='input-lables'>author:</span><input type='text' id='author' onChange={handleChangeAuthor} value={enteredAuthor}></input>
                <span id="label-price" className='input-lables'> price:</span><input type='text' id='price' onChange={handleChangePrice} value={enteredPrice}></input>

                <input type='submit' value='add' id="add-btn"></input>
            </form>
        </div>
    );
}

export default AddBook;