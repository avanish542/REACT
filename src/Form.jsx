function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submiting")
}



function Form() {
    return ( 
        <form onSubmit= {handleFormSubmit}>
            <input placeholder="Write something"/>
            <button >Submit</button>
        </form>
     );
}

export default Form;