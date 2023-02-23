import { useSelector } from 'react-redux'

export const RecipeContainerComponent=(props)=>{

  const isLogged = useSelector(state => state.recipeList.isLogged)
  const ingredients = useSelector(state => state.recipeList.ingredients)

  return(
      <div className="col-10 offset-1 rounded bg-dark text-light p-3 mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Recipes List</h2>
          {isLogged &&<button className='btn btn-success'><i className="bi bi-plus-circle"></i> Add</button>}
        </div>
        <hr />
      </div>
  )
} 