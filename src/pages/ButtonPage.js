import Button from "../components/Button";
import { GoBellFill, GoDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
   
    return (
        <div>
            <div>
                <Button className='mb-5'>Default</Button>
            </div>
            <div>
                <Button primary rounded><GoBellFill />Primary</Button>
            </div>
            <div>
                <Button secondary><GoDownload />Secondary</Button>
            </div>
            <div>
                <Button success>Success</Button>
            </div>
            <div>
                <Button warning outline><GoDatabase />Warning</Button>
            </div>
            <div>
                <Button danger>Danger</Button>
            </div>
        </div>
    )
}

export default ButtonPage;
