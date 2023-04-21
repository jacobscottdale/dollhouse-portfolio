import './SkyBackground.css';

    const SkyBackground = (props) => {
	    return (
		    <div className='SkyBackground'>
          <div className="sun"></div>
          <div className="cloud"></div>
          {props.children}
		    </div>
	    );
    }

    export default SkyBackground;
