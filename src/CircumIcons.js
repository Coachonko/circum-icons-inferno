import { Component } from 'inferno';

import { icons } from './iconList'; // https://github.com/Klarr-Agency/Circum-Icons/issues/21

export default class CircumIcon extends Component {
 static defaultProps = {
   size: '32px',
   color: 'currentColor'
 }

 render() {
   const { name, size, color } = this.props;
   const displayIcon = icons.find((e) => e.name === name);

   return (
    <svg
    className={"circumicon__" + name}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    dangerouslySetInnerHTML={{ __html: displayIcon.svg }}
  />
   );
 }
}