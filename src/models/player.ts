import { UUID } from 'crypto';
import { DateTime } from 'luxon';
import { PlayerAction } from '../enums/player-action.enum';

export default interface Player {
  id: UUID;
  game_id: UUID;
  name: string;
  amount: number;
  is_online: boolean;
  is_active: boolean;
  action: PlayerAction;
  action_amount: number;
  created_at: DateTime;
}
