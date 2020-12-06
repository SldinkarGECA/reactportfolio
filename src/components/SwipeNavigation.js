import ReactSwipeNavigation from 'react-swipe-navigation';
import AboutMe from './AboutMe'
import MySkills from './MySkills'
import Projects from './Projects'
import ContactMe from './ContactMe'
import './styles.css'

function SwipeNavigation() {
    return (
        <ReactSwipeNavigation
            menu={['About Me', 'My Skills', 'Projects', 'Contact Me']}>
            <div>
                <AboutMe/>
            </div>
            <div>
                <MySkills/>
            </div>
            <div>
                <Projects/>
            </div>
            <div>
                <ContactMe/>
            </div>
        </ReactSwipeNavigation>

    );
}

export default SwipeNavigation;
