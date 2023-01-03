import { createBoard } from '@wixc3/react-board';
import Button from '@mui/material/Button';

export default createBoard({
    name: 'mui',
    Board: () => (
        <div>
            <Button />
        </div>
    )
});
