import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.css';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};



class SimpleMediaCard extends React.Component {
  render() {
    return (
      <div className="card">
        <Card>
          <img className="card-image" src={this.props.item.image}/>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
            {this.props.item.name}
            </Typography>
            <Typography component="p">
              Quantity: {this.props.item.quantity}
              <br/>
              Price: {this.props.item.price}
            </Typography>
          </CardContent>
        </Card>
      </div>
  );
  }
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);