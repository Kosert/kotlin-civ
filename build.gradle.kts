@file:OptIn(ExperimentalDistributionDsl::class)

import org.jetbrains.kotlin.gradle.targets.js.dsl.ExperimentalDistributionDsl

plugins {
    kotlin("multiplatform") version "2.2.0"
}

group = "me.kosert.civ"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

kotlin {
    compilerOptions {
        freeCompilerArgs.add("-opt-in=kotlin.uuid.ExperimentalUuidApi")
    }

    js(IR) {
        browser {
            distribution {
                outputDirectory.set(projectDir.resolve("output"))
            }
        }
        binaries.library()

        generateTypeScriptDefinitions()
//        binaries.executable()
    }

    jvm()

    sourceSets {
        commonMain.dependencies {
//            implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.10.2")
        }

        jsMain.dependencies {
//            implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:1.10.2")
        }

        commonTest.dependencies {
            implementation(kotlin("test"))
        }
    }
}