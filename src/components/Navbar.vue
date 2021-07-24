<template>
    <b-navbar class="is-max-desktop" wrapper-class="container" font-family="'Handlee', cursive">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <p class="is-size-6 is-uppercase">
                    Pritesh Usadadiya</p>
            </b-navbar-item>
        </template>
        <template #start>
        </template>
        <template #end>
            <g-link class="navbar-item" to="/blog/">Blog</g-link>
            <g-link class="navbar-item" to="/category/software-testing/">Software Testing</g-link>
            <g-link class="navbar-item" to="/category/development/" >Development</g-link>
            <g-link class="navbar-item" to="/projects/" >Projects</g-link>
            <g-link class="navbar-item" to="/about/" >About</g-link>
        </template>
    </b-navbar>
</template>