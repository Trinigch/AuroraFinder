import LocationInput from "../components/LocationInput";


const Find = () => {
    return(
        <>
            <form className="form" onSubmit={handleFormSubmit}>
                <label htmlFor="city">City:</label><br/>
                <input 
                    type="text" 
                    id="city" 
                    name="city"
                    onChange={handleInputChange}
                /> <br/>
                <label htmlFor="State">State:</label><br/>
                <input type="text" id="state" name="state"/><br/>
                <input type="submit" className="submitButton">Submit</input>
            </form>
        </>
    );
}


export default Find;