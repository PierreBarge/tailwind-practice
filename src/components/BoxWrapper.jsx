import PropTypes from "prop-types";

export default function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}

BoxWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};
