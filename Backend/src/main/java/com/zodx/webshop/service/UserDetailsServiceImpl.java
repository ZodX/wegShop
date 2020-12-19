package com.zodx.webshop.service;

import com.zodx.webshop.entity.User;
import com.zodx.webshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(s);



        if (user.isPresent()) {
            System.out.println(user.get().getUsername() + ":" + user.get().getPassword() + ":" + user.get().getAuthorities());
            return user.get();
        } else {
            throw new UsernameNotFoundException("Username not found.");
        }
    }
}
