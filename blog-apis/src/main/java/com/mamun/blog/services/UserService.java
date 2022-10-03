package com.mamun.blog.services;


import java.util.List;

import com.mamun.blog.payloads.UserDto;

public interface UserService {

    UserDto createUser(UserDto user);

    UserDto updateuser(UserDto user, Integer userId);

    UserDto getUserById(Integer userId);

    List<UserDto> getAllUsers();

    void deleteUser(Integer userId);
    
}