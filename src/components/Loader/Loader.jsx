import { Blocks } from 'react-loader-spinner';
import CSS from './index.module.css';

const Loader = () => {
  return (
    <div className={CSS.blocksWrapper}>
      <Blocks
        height="100"
        width="100"
        color="#6666de"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
};
export default Loader;
