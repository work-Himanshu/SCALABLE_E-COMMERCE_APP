import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Elements({ url, alt, description, price }) {
  return (
    <Card className="max-w-md hover:scale-103 transform transition-all duration-300">
      <CardMedia
        component="img"
        className="h-80 md:h-120"
        image={url || '/static/images/cards/contemplative-reptile.jpg'}
        alt={alt || 'product image'}
        title={alt || 'product image'}
      />
      <CardContent>
        <div className="flex justify-between mb-2">
          <div>
            <Typography gutterBottom classes={{ root: 'w-1' }} component="div">
              {alt || 'Person'}
            </Typography>
          </div>
          <Button variant="secondary" className="p-2" size="small">
            ₹ {price} /-
          </Button>
        </div>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description || 'Product description goes here.'}
        </Typography>
        <div className="mt-2 justify-self-end mt-4">
          <Button variant="contained" size="small">
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
