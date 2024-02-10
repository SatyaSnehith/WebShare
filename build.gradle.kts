// Top-level build file where you can add configuration options common to all sub-projects/modules.

@file:Suppress("DSL_SCOPE_VIOLATION")
plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.android.library) apply false
    alias(libs.plugins.kotlin.android) apply false
    alias(libs.plugins.ksp) apply false
    alias(libs.plugins.mikepenz.aboutlibraries) apply false
//    id("org.jetbrains.kotlin.plugin.serialization") version "1.9.20" apply false
}

buildscript {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
    dependencies {
        classpath(libs.androidx.navigation.argsPlugin)
        classpath ("org.jetbrains.kotlin:kotlin-serialization:1.6.0")

    }
}
