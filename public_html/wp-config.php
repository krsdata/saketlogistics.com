<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'saketlog_logistics');

/** MySQL database username */
define('DB_USER', 'saketlog_logis');

/** MySQL database password */
define('DB_PASSWORD', 'saketlogistics@123');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'F*%7r)]@:usu1vRknT&IypkVJX.;M;Da.^>ijb%.hXRmSRi1~N)oNtfjV.zCU?PU');
define('SECURE_AUTH_KEY',  '87{@a@H=>.MzO#LlQEkUBny|`E[k:aC+:`!tkNXOTe&mWrnCch<`:55ZZjO&;@bz');
define('LOGGED_IN_KEY',    'QaFf0|$@WZNnA>Z4>jb/]?6HE(rPs]Ph&u`z998;T6fD6j7P?[8)(*Eq~v[D~;uo');
define('NONCE_KEY',        '%<YK=h0ta{I8J,mz<ihMs9+~t[=stBJ# dy9>ky#Az4z9=msBmj?Nsk>l&u<Q{QV');
define('AUTH_SALT',        '`O<+EwrGy#q67/<qXYJC}R1_4<RgLU2-QV5k/Ad(jRQ@C[G(]2fhd`<g&Lm~rnCU');
define('SECURE_AUTH_SALT', '3e^b{qY>[(aD#C]>S<!!A]M`MyfN?aQ)sg:4AxPYa%Wlv.zT%F*xsIR&FJ1aHr$d');
define('LOGGED_IN_SALT',   '38_Nt]]OW4J!e.r|]N>805X:}L/SPZ)p:F{4mY.|T}U3J MTfX1JGWFS-p}][K%2');
define('NONCE_SALT',       'g$9&<FPAI,{nJ:^YAE$mzE]-NcWxekJQ40|I|ZL}@n]( G/Hcr[`w!+3Zz,5~0=|');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
