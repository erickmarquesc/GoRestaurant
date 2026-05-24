import { Card } from '../Card';
import { useFoods } from '../../hooks/useFoods';
import { Container, Grid, SkeletonCard } from './styles';

const SKELETON_COUNT = 6;

export function Dashboard() {
  const { foods, loading } = useFoods();

  return (
    <Container>
      <Grid>
        {loading
          ? Array.from({ length: SKELETON_COUNT }).map((_, i) => <SkeletonCard key={i} />)
          : foods.map((food) => (
              <Card.Root key={food.id} food={food}>
                <Card.Header />
                <Card.Body />
                <Card.Footer />
              </Card.Root>
            ))}
      </Grid>
    </Container>
  );
}
