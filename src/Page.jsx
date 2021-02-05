import Entete from './Entete';
import './Page.css';
import PiedDePage from './PiedDePage';
import ListeProduits from './ListeProduits';

export default function Page() {
  return (
    <div className="Page">
		<Entete/>
		<section className="contenuPrincipal">
			<ListeProduits/>
		</section>

		<PiedDePage/>
    </div>
  );
}
