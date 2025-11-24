import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Elements({ url, alt , description}) {
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
        <Typography gutterBottom variant="h5" component="div">
          {alt || 'Person'}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description || 'Product description goes here.'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
