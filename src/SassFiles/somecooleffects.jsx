import './SomeCoolEffcts.scss';

export const SomeCoolEffects1 = () => {
    //smooth modern hover effect
    return (
        <div className='somecooleffects1'>
            <ul>
                <li>Awesome</li>
                <li>Hover</li>
                <li>Css</li>
                <li>Effect</li>
            </ul>
            <label for="photo">Take a photo</label>
            <input type="file" id= "photo" capture="user"/>
            <input type="file" capture="environment"/>
        </div>
    );
};