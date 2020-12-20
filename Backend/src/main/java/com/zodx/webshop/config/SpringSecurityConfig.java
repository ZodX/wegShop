package com.zodx.webshop.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

    @Qualifier("userDetailsServiceImpl")
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.headers().frameOptions().disable();
        http.csrf().disable().cors()
                .and()
                .authorizeRequests()
                .antMatchers("/api/auth/basicauth").permitAll()
                .antMatchers("/api/products/newProduct").hasRole("ADMIN")
                .antMatchers("/api/products/delete/**").hasRole("ADMIN")
                .antMatchers("/api/products/modify/**").hasRole("ADMIN")
                .antMatchers("/api/products/getAllProducts").permitAll()
                .antMatchers("/api/products/**").permitAll()
                .antMatchers("/api/carts/newCart").hasRole("USER")
                .antMatchers("/api/carts/delete/**").hasRole("USER")
                .antMatchers("/api/carts/getAllCarts").hasRole("USER")
                .antMatchers("/api/users/newUser").permitAll()
                .antMatchers("api/users/getOrderCounter/**").hasAnyRole("ADMIN", "USER")
                .antMatchers("/**").hasRole("ADMIN")
                .and().httpBasic();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder);
        provider.setUserDetailsService(userDetailsService);
        return provider;
    }
}
