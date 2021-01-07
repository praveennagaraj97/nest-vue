import { Roles } from '../src/common';
import { Profile, Role, User } from '../src/entity';

export const userRole = new Role();
userRole.id = 3;
userRole.name = Roles.User;

export const jamesBondProfile = new Profile();
jamesBondProfile.id = 1;
jamesBondProfile.lastName = 'Bond';
jamesBondProfile.firstName = 'James';

export const jamesBond = new User();
jamesBond.id = 1;
jamesBond.email = 'james.bond@mailinator.com';
jamesBond.role = userRole;
jamesBond.password = '123456';
jamesBond.profile = jamesBondProfile;
