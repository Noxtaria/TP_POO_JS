export default function Adresse(props) {
    const {rue, ville, cp} = props.adresse
    return (
        <div>
            {/* <td>{rue}</td>
            <td>{ville}</td>
            <td>{cp}</td> */}
            Rue : {rue}, Ville : {ville}, Code Postal : {cp}
        </div>
    )
}