import { IconButton, Slider } from "@mui/material";

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

  return <div>
    <IconButton aria-label="delete" size="small">
      <DeleteIcon fontSize="inherit" />
    </IconButton>

    <Slider
      track={false}
      aria-labelledby="track-inverted-range-slider"
      defaultValue={calculateCategoriesSliderPositions(categories)}
      size='small'
      disableSwap
    />
  </div>

}