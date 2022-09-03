import { IconButton, Slider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


interface Category {
  name: string
  color: string
  weight: number
}

export default function CategoryWeights() {
  const categories: Category[] = [
    {
      name: 'Amazon',
      color: 'orange',
      weight: 40
    },
    {
      name: 'Groceries',
      color: 'green',
      weight: 60
    }
  ]

  const calculateCategoriesSliderPositions = (categories: Category[]) => categories.reduce((acc, curr) => {
    return acc
  }, [])

  return <div style={{ display: 'flex' }}>
    <Slider
      track={false}
      aria-labelledby="track-inverted-range-slider"
      defaultValue={calculateCategoriesSliderPositions(categories)}
      size='small'
      disableSwap
    />

    <IconButton color="primary" aria-label="delete" size="small">
      <AddIcon fontSize="inherit" />
    </IconButton>
  </div>

}