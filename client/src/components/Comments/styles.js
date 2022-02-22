import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  commentOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '20px',
    width: '100%', 
   
  },
  loadingPaper: {
     justifyContent: 'center', alignItems: 'center',  borderRadius: '5px', marginLeft: '10px', 
  },

  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    
    
    
 },
  profile: {
  display: 'flex',
  padding: '5px',
 },
}));