import {setBuku} from '../actions';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import Beranda from '../components/Beranda';

const mapDispatchToProps = (dispatch) => {
	return {
		setBuku: (buku) => {
			dispatch(setBuku(buku));
		},
		detailBuku: (buku) => {
			dispatch(NavigationActions.navigate({
				routeName: 'DetailBuku',
				params: buku
			}));
		}
	};
};

const mapStateToProps = (state) => {
	return {
		nav: state.nav,
		buku: state.buku
	};
};

export default connect(mapStateToProps, mapDispatchToProps) (Beranda);