export namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      private isSuperAdmin: boolean;
      private isAdmin: boolean = true;

      constructor(
        private name: string,
        private email: string,
        isSuperAdmin: boolean = false
      ) {
        this.isSuperAdmin = isSuperAdmin;
      }

      toggleSuperAdmin() {
        this.isSuperAdmin = !this.isSuperAdmin;
      }
      getInfo(): string {
        return `Имя: ${this.name}, Email: ${this.email}, SuperAdmin: ${this.isSuperAdmin}`;
      }
    }
  }
}
