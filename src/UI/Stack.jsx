import PropTypes from 'prop-types';

const Stack = ({children}) => (
  <div className='stack'>
     {children}
  </div>
);

export {Stack};

Stack.propTypes = {
  children: PropTypes.node.isRequired,
}