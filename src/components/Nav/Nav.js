import * as PropTypes from 'prop-types';
import * as React from 'react';
import NavStyles from './Nav.styles';
import Button from '../Button/Button';
import{
    NavStyles, NavSelectedStyles, NavActiveStyles, NavHoverStyles, firstNavItem, secondNavItem,thirdNavItem,forthNavItem,fifthNavItem,
} from './Nav.styles';

export default class Nav extends React.Component{
    static getDerivedStateFromProps(props) {
        return {
          body: props.data.body,
          header: props.data.header,
        };
      }

    constructor(props) {
       super(props);
       this.state = {
         body: this.props.data.body,
         header: this.props.data.header,
       };
     }

     render() {
         return(
             <NavStyles {...this.props}>
                 <NavSelectedStyles>
                     <NavActiveStyles>
                         <NavHoverStyles>

                         </NavHoverStyles>
                     </NavActiveStyles>
                 </NavSelectedStyles>
             </NavStyles>          
         )
     }
}

Nav.propTypes = {
}

Nav.defaultProps = {
    width: '200px',
};