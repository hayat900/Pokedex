import "./searchbox.css";
interface SearchboxProps {
    onInputChange: (inputvalue: string) => void;
}

const Searchbox = ({onInputChange}:SearchboxProps) => {
    return (
        <input onChange={
            (e)=>{
                console.log(e.target.value);
                onInputChange(e.target.value);
            }
        }
            className="search"
            
            type="search"
            placeholder="Search Pokemons"
        />
    );
};

export default Searchbox;