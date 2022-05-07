import { Container } from "./styles";
import { FiEdit3, FiTrash } from 'react-icons/fi';
import imgLogo from '../../assets/logo.svg';
import { useFoods } from "../../hooks/useFoods";
const isAvailable = true;

export function Card() {

  const {foods} = useFoods();
  console.log(foods)
  return (
    <Container>
        <div>
        {foods.map(food =>{
          return(
          <div key={food.id}>
            <header>
              <img src={imgLogo} alt="Entradas" />
            </header>

            <main>
              <h2>{food.name}</h2>
              <p>
                Macarrão ao molho branco, fughi e cheiro verde das montanhas
              </p>
              <strong>
                R$ 19.90
              </strong>
            </main>

            <footer>
              
                <div className="icon-container">
                  <button
                    type="button"
                    className="icon"
                    //onClick={this.setEditingFood}
                    //data-testid={`edit-food-${food.id}`}
                  >
                    <FiEdit3 size={20} />
                  </button>

                  <button
                    type="button"
                    className="icon"
                    //onClick={() => handleDelete(food.id)}
                    //data-testid={`remove-food-${food.id}`}
                  >
                    <FiTrash size={20} />
                  </button>
                </div>

                <div className="availability-container">
                  <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

                  <label  className="switch">
                    <input
                      //id={`available-switch-${food.id}`}
                      type="checkbox"
                      //checked={isAvailable}
                      //onChange={this.toggleAvailable}
                      //data-testid={`change-status-food-${food.id}`}
                    />
                    <span className="slider" />
                  </label>
                </div>
              
            </footer>
          </div>

          )
        })}
        </div>
      

    </Container>
  );
}