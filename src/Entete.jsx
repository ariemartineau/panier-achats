import './Entete.css';

export default function Entete(props){
    return(
        <header>
			<div>Logo</div>
			<ul className="navPrincipale">
				<li>Produits</li>
				<li>À propos de nous</li>
			</ul>
			<ul className="navUtil">
				<li>Panier</li>
				<li>Mon compte</li>
			</ul>
		</header>
    );
}