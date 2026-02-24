const Storage = {

    saveUser: function(user) {
        localStorage.setItem("travelUser", JSON.stringify(user));
    },

    getUser: function() {
        return JSON.parse(localStorage.getItem("travelUser"));
    },

    setLoggedIn: function(status) {
        localStorage.setItem("isLoggedIn", status);
    },

    isLoggedIn: function() {
        return localStorage.getItem("isLoggedIn") === "true";
    },

    logout: function() {
        localStorage.removeItem("isLoggedIn");
    }

};
