interface User {
    readonly id: string,
    firstName: string,
    lastName: string,
    phone: number | null,
    email: string | null,
    gender: Gender,
    deleted: boolean;
}

enum Gender {
    male = 'male',
    female = 'female'
}

interface CreateUser {
    firstName: string,
    lastName: string,
    phone?: number,
    email?: string,
    gender: Gender,
}


class UserService {
    users: User[] = [];
    
    getUsers(): User[] {
        console.log(this.users);
        return this.users;
    }

    getActiveUsers(): Array<User> {
        const activeUsers: User[] = this.users.filter((user: User) => !user.deleted)
        console.log(activeUsers);
        return activeUsers;
    }

    getUserById(id: string): User | undefined {
        const foundUser: User | undefined = this.users.find((user: User) => user.id === id);
        console.log(foundUser);
        return foundUser;
    }

    createUser(user: CreateUser){
        const newUser: User = {
            id: crypto.randomUUID(),
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender,
            phone: user.phone ?? null,
            email: user.email ?? null,
            deleted: false
        }
        this.users.push(newUser);
    }

    updateUser(id: string, updateUser: CreateUser | User): void {
        const user: User | undefined = this.users.find((user: User) => user.id === id);
        // user.firstName = updateUser.firstName,
        // user.lastName = updateUser.lastName,
        // user.email = updateUser.email ?? null,
        // user.phone = updateUser.phone ?? null,
        if (user) {
            if (!user.deleted) {
                user.firstName = updateUser.firstName,
                user.lastName = updateUser.lastName,
                user.email = updateUser.email ?? null,
                user.phone = updateUser.phone ?? null,
                user.gender = updateUser.gender,
                user.deleted = false
            } else {
                console.log("Nie można zaktualizować usuniętego użytkownika");
                
            }
        } else {
            console.log("Nie ma takiego użytkownika");
        }
    }

    deleteUser(id: string): void {
        const user: User | undefined = this.users.find((user: User) => user.id === id);
        if (user) {
            user.deleted = true;
        }
    }
}