import { Grid, Text } from '@nextui-org/react';

const SizeComparison = ({ base, comparison }) => {
  const delta = comparison ? (base / comparison) * 100 : null;
  const difference = comparison ? base - comparison : null;

  return (
    <Grid.Container
      gap={2}
      alignItems="baseline">
      <Grid>
        <Text
          size={72}
          b>
          {base} kb
        </Text>
      </Grid>
      {delta && (
        <Grid>
          <Text
            size={24}
            color="primary"
            b>
            {difference.toFixed(2)} kb ({delta.toFixed(2)}%)
          </Text>
        </Grid>
      )}
    </Grid.Container>
  );
};
export default SizeComparison;
