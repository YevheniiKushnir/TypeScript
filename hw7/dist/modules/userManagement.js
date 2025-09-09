export var UserManagement;
(function (UserManagement) {
    let Admin;
    (function (Admin) {
        class AdminUser {
            name;
            email;
            isSuperAdmin;
            isAdmin = true;
            constructor(name, email, isSuperAdmin = false) {
                this.name = name;
                this.email = email;
                this.isSuperAdmin = isSuperAdmin;
            }
            toggleSuperAdmin() {
                this.isSuperAdmin = !this.isSuperAdmin;
            }
            getInfo() {
                return `Имя: ${this.name}, Email: ${this.email}, SuperAdmin: ${this.isSuperAdmin}`;
            }
        }
        Admin.AdminUser = AdminUser;
    })(Admin = UserManagement.Admin || (UserManagement.Admin = {}));
})(UserManagement || (UserManagement = {}));
//# sourceMappingURL=userManagement.js.map