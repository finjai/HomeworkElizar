'use strict';

function THashStorage() {
    this.store = {};

    this.AddValue = function (Key, Value) {
        this.store[Key] = Value;
    }

    this.GetValue = function (Key) {
        return this.store[Key];
    }
    this.DeleteValue = function (Key) {
        delete this.store[Key];
    }
    this.GetKeys = function() {
        return Object.keys(this.store);
    }
}